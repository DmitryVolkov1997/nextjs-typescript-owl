import React, {FC, useEffect, useState, KeyboardEvent} from 'react'
import styles from './Rating.module.scss'
import cn from 'classnames'
import {RatingProps} from '@/components/Rating/Rating.props'
import StarIcon from './star.svg'

export const Rating: FC<RatingProps> = (props): JSX.Element => {
	const {isEditable = false, className, rating, setRating, ...rest} = props
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r, idx) => {
			return (
				<span key={idx} className={cn(styles.star, className, {
					[styles.filled]: idx < currentRating,
					[styles.editable]: isEditable
				})} onMouseEnter={() => changeDisplay(idx + 1)} onMouseLeave={() => changeDisplay(rating)}
					  onClick={() => onClick(idx + 1)}>
					<StarIcon key={idx} tabIndex={isEditable ? 0 : -1}
							  onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(idx + 1, e)} {...rest}/>
				</span>
			)
		})

		setRatingArray(updatedArray)
	}

	const changeDisplay = (rating: number) => {
		if (!isEditable) return

		constructRating(rating)
	}

	const onClick = (rating: number) => {
		if (!isEditable || !setRating) return

		setRating(rating)
	}

	const handleSpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code === 'Space' && setRating) {
			setRating(rating)
		}
	}

	return (
		<div {...rest}>
			{
				ratingArray.map((r, idx) => (
					<span key={idx}>
						{r}
					</span>
				))
			}
		</div>
	)
}

// 3:23
