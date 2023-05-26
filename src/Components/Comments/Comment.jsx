import defualt_comment_img from '../../assets/images/comment-author-01.jpg';

const Comment = ({ commentType, commenterImg }) => {
    return (
        <li className={commentType}>
            <div className='author-thumb'>
                <img src={commenterImg} alt='' />
            </div>
            <div className='right-content'>
                <h4>
                    Thirteen Man
                    <span>May 20, 2020</span>
                </h4>
                <p>
                    In porta urna sed venenatis sollicitudin. Praesent urna sem,
                    pulvinar vel mattis eget.
                </p>
            </div>
        </li>
    );
};

Comment.defaultProps = {
    commentType: '',
    commenterImg: defualt_comment_img,
};

export default Comment;
