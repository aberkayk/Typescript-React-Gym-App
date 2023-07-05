import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img src={Logo} alt="logo" />
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						perferendis, quam possimus nemo dolore deserunt, nisi soluta, rerum
						maiores minima similique temporibus ad aut sunt ex reiciendis
						asperiores veritatis in.
					</p>
					<p>Ⓒ Evogym All Rights Reserved.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Massa orci senectus</p>
					<p className="my-5">Et gravida id et etiam</p>
					<p>Ullamcorper vivamus</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">Quam possimus nemo</p>
					<p className="my-5">Similique temporibus ad</p>
					<p>(333)425-6789</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
