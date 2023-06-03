import React from 'react';
const Pagination = ({ blogsPagination, fetchBlogs, setBlogs }) => {
    const changePage = async (page = 1) => {
        fetchBlogs({ url: blogsPagination.path, params: { page } });
    };
    return (
        <div className='col-lg-12'>
            <ul className='page-numbers'>
                {/* first page */}
                <li>
                    <a href='#' onClick={() => changePage(1)}>
                        <i className='fa fa-angle-double-left'></i>
                    </a>
                </li>

                {/* previous page */}
                {blogsPagination.current_page > 1 && (
                    <li>
                        <a
                            href='#'
                            onClick={() =>
                                changePage(blogsPagination.current_page - 1)
                            }
                        >
                            {blogsPagination.current_page - 1}
                        </a>
                    </li>
                )}

                {/* CURRENT PAGE */}

                <li className={blogsPagination.current_page && 'active'}>
                    <a href='#'>{blogsPagination.current_page}</a>
                </li>
                {/* NEXT PAGE */}
                {blogsPagination.last_page > blogsPagination.current_page && (
                    <li>
                        <a
                            href='#'
                            onClick={() =>
                                changePage(blogsPagination.current_page + 1)
                            }
                        >
                            {blogsPagination.current_page + 1}
                        </a>
                    </li>
                )}
                {/* LAST PAGE */}
                {blogsPagination.current_page != blogsPagination.last_page && (
                    <li>
                        <a
                            href='#'
                            onClick={() =>
                                changePage(blogsPagination.last_page)
                            }
                        >
                            <i className='fa fa-angle-double-right'></i>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
