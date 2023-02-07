import {Htag, P, Button, Tag, Rating} from '@/components'
import {useState} from 'react'

export default function Home() {
	const [rating, setRating] = useState(4)

	return (
		<div style={{background: 'white', minHeight: '100vh'}}>
			<Htag tag="h1">Hello</Htag>
			<Button appearance={'primary'} arrow="right">Button1</Button>
			<Button appearance={'ghost'} arrow="down">Button2</Button>
			<P size="sm">Параграф 1</P>
			<P size="base">Параграф 2</P>
			<P size="xl">Параграф 3</P>
			<Tag color="ghost" size="sm">Tag-1</Tag>
			<Tag color="red" size="sm">Tag-2</Tag>
			<Tag color="gray" size="md">Tag-3</Tag>
			<Tag color="green" size="md">Tag-4</Tag>
			<Tag color="primary" size="md" href="https://www.youtube.com/">Tag-5</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating}/>
		</div>
	)
}


