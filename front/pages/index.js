import React from 'react';
import PostFrom from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

const Home = () => {
    //성능최적화를 위해서 나눈다.
    const user = useSelector(state => state.user.user)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const { mainPosts } = useSelector(state => state.post)

    return (
        <div>
            {user
                ? <div>로그인 했습니다: {user.nickname}</div>
                : <div> 로그아웃 했습니다.</div>
            }
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={} post={c} />
                );
            })}
        </div>
    );
};

export default Home;