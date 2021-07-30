import React from 'react'
import './Post.scss'
function Post({ post }) {
	return (
		<div className="post">
			<aside className="author-avatar">
				<img
					className="author-avatar-image"
					src={post.author.photo}
					alt={post.author.photo}
				/>
			</aside>
			<section>
				<header>
					<span className="author-name">{post.author.name}</span>
					<img
						className="icon icon-checked"
						src={post.author.checked.icon}
						alt="Checked"
					/>
					<span className="author-nickname">{post.author.nickname}</span>
					<span className="spacer">·</span>
					<span className="post-date">{post.content.date}</span>
					<img className="icon icon-more" src={post.action.more.icon} alt="" />
				</header>

				<div className="post-content">
					<div className="post-content-text">{post.content.textContent}</div>
					<div className="post-content-image">
						<img
							className="post-image"
							src={post.content.imageContent}
							alt="Content"
						/>
					</div>
				</div>
				<footer>
					<div className="post-actions">
						<div className="action action-comment">
							<img
								className="icon"
								src={post.action.comment.icon}
								alt="Comment"
							/>
							<span className="comment-counter">
								{post.action.comment.counter}
							</span>
						</div>
						<div className="action action-repost">
							<img
								className="icon icon-repost"
								src={post.action.repost.icon}
								alt="Repost"
							/>
							<span className="comment-counter">
								{post.action.repost.counter}
							</span>
						</div>
						<div className="action action-like">
							<img
								className="icon icon-like"
								src={post.action.like.icon}
								alt="Like"
							/>
							<span className="comment-counter">
								{post.action.like.counter}
							</span>
						</div>
						<div className="action action-share">
							<img
								className="icon icon-like"
								src={post.action.share.icon}
								alt="Share"
							/>
						</div>
					</div>
				</footer>
			</section>
		</div>
	)
}

export default Post
