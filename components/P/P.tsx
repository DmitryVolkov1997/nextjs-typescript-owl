import React, {FC} from 'react'
import styles from './P.module.scss'
import cn from 'classnames'
import {PProps} from '@/components/P/P.props'

export const P: FC<PProps> = (props): JSX.Element => {
	const {children, className, size = 'xl', ...rest} = props

	return (
		<p className={cn(styles.p, className, {
			[styles.sm]: size === 'sm',
			[styles.base]: size === 'base',
			[styles.xl]: size === 'xl',
		})} {...rest}>{children}</p>
	)
}

