import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Header() {
	const title = 'Kellen Wiltshire Web Development';
	const desc =
		'Web Development Services for Brochure and Shopify sites as well as Web Apps.';
	const ogImgRelativePath = '/profile.jpg';
	const siteURL = 'https://kellenwiltshire.com';
	const ogImageUrl = `${siteURL}${ogImgRelativePath}`;
	const pathName = useRouter().pathname;
	const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
	const siteName = 'KellenWiltshire.com';
	const twitterHandle = '@KellenRDW';

	return (
		<NextSeo
			title={title}
			description={desc}
			canonical={pageURL}
			openGraph={{
				type: 'website',
				locale: 'en_US',
				url: pageURL,
				title,
				description: desc,
				images: [
					{
						url: ogImageUrl,
						width: 800,
						height: 800,
						alt: 'kellenwiltshire.com - personal site',
					},
				],
				site_name: siteName,
			}}
			twitter={{
				handle: twitterHandle,
				site: twitterHandle,
				cardType: 'summary_large_image',
			}}
			additionalMetaTags={{
				property: 'author',
				content: title,
			}}
			additionalLinkTags={[
				{
					rel: 'icon',
					href: `${siteURL}/favicon.ico`,
				},
			]}
		/>
	);
}
