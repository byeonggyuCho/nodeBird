import React from 'react';
import { Button, Form, Input } from 'andt';
import { useSelector } from 'react-redux';


const PostForm = () => {

    const { imagePaths } = useSelector(state => state.post)

    return (
        <Form style={margin: '10px 0 20px'
} encType = "multipart/form-data" >
    <Input.TextArea maxLength={140} placeholer="어떤 신기한 일이 있었나요?" />
    <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' } htmlType="submit"}></Button>
</div >
    <div>
        {imagePaths.map((v, i) => {
            return (
                <div key={} style{{ display: 'inline-block' }}>
                    <img src={'http://localhost:3065/' + c} style={{ width: '200px' }} alt={v} />
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            )
        })}
    </div>
</Form >


);
    
}



export default PostForm