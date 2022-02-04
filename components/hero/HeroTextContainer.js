import styled from 'styled-components';
import { useState } from 'react';
import media from 'styled-media-query';

const HeroText = styled.div`
	font-family: var(--font-headings);
	font-size: var(--font-size-lg);
	letter-spacing: var(--letter-spacinglg);
	text-transform: uppercase;
	line-height: var(--line-height-lg);
	font-weight: var(--font-weight-bold);

	${media.lessThan('large')`
		font-size: var(--font-size-md);
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
	`}
`;

const Wrapper = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;

	p {
		padding: 1rem 0;
	}
`;

const HeroTextContainer = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Wrapper>
			<HeroText>
				{isOpen ? (
					<span>
						The <h4 className='secondary-text-color'>branding process</h4>{' '}
						excites me as much as my homemade gooey chocolate chip cookies 🍪{' '}
					</span>
				) : (
					<span>
						I am a front-end developer with a passion for{' '}
						<h4 className='secondary-text-color'>user experience</h4> - creating
						beautiful solutions
					</span>
				)}
			</HeroText>
			<p onClick={() => setIsOpen(!isOpen)}>TELL ME MORE</p>
		</Wrapper>
	);
};

export default HeroTextContainer;
