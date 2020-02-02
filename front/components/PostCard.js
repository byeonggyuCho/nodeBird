import React, { Component } from 'react'';
import { Card, Icon, Button, Avatar } from 'antd';
import propTypes from '';

const PostCard = ({ post }) => {

    return (
        <Card
            key={+post.createdAt}
            cover={c.img && <img alt="example" src={post.img} />}
            actions={[
                <Icon type="retweet" key="retweet" />
                <Icon type="heart" key="hart" />
                <Icon type="message" key="message" />
                <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}></Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        constent: PropType.string,
        img: PropTypes.string,
        createdAt: 
    })
}

export default PostCard;