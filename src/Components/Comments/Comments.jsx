import Comment from './Comment';
const Comments = () => {
    return (
        <div className='col-lg-12' id='comments'>
            <div className='sidebar-item comments'>
                <div className='sidebar-heading'>
                    <h2>4 comments</h2>
                </div>
                <div className='content'>
                    <ul>
                        <Comment />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Comments;
