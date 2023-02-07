import React, {FC} from 'react'
import styles from './Tag.module.scss'
import cn from 'classnames'
import {TagProps} from '@/components/Tag/Tag.props'

export const Tag: FC<TagProps> = (props) => {
	const {children, size = 'sm', color = 'ghost', href, className, ...rest} = props

	return (
		<div className={cn(styles.tag, className, {
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.gray]: color === 'gray',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary',
			[styles.sm]: size === 'sm',
			[styles.md]: size === 'md'
		})} {...rest}>
			{href ? <a href={href} target="_blank" rel="noreferrer">{children}</a> : children}
		</div>
	)
}

