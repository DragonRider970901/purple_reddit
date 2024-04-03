import { createSelector, createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";
import { getPostComments, getSubredditPosts } from "../api";


const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectSubreddit: '/r/pics/',
}

const redditSlice = createSlice({
    name: 'redditPosts', 
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state, action) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectSubreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        startGetComments(state, action) {
            //If we're hiding the comments, don't fetch the comments
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            if(!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    }
})

export const {
    setPosts,
    getPostsFailed,
    getPostsSuccess,
    startGetPosts,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments,
} = redditSlice.actions;

export default redditSlice.reducer;

//This is a Redux Thunk that gets posts from  a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);

        //we are adding showingCommentd and comments as additional fields to
        //handle showing them when the user wants to. We need to do this because we
        //need to call another API endpoint to get comments for each post.
        const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
        }));
        dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error){
        dispatch(getPostsFailed());
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({ index, comments }));
    } catch(error) {
        dispatch(getCommentsFailed(index));
    }
};

const selectPosts = (state) => state.reddit.posts;

const selectSearchTerm = (state) => state. reddit.searchTerm;

export const selectSelectedSubreddit = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if(searchTerm !== '') {
            return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return posts;
    }
)