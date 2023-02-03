import {Htag, P, Button} from '@/components'

export default function Home() {
	return (
		<>
			<Htag tag="h1">Hello</Htag>
			<Button appearance={'primary'} arrow="right">Button1</Button>
			<Button appearance={'ghost'} arrow="down">Button2</Button>
			<P size="sm">Параграф 1</P>
			<P size="base">Параграф 2</P>
			<P size="xl">Параграф 3</P>
		</>
	)
}

