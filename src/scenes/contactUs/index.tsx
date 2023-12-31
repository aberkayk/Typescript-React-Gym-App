import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
	setSelectedPage: (value: SelectedPage.ContacatUs) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;

	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContacatUs)}
			>
				{/* Header */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</HText>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						animi quis cumque reprehenderit! Ea ipsam quidem, rerum suscipit,
						recusandae fugit officiis error qui a quas totam odio blanditiis,
						voluptate possimus? Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Odio, aut?
					</p>
				</motion.div>

				{/* Form and Image */}
				<div className="mt-10 justify-between gap-8 md:flex">
					{/* Form */}
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, y: -50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/aberkayk@hotmail.com"
							method="POST"
						>
							<input
								type="text"
								className={inputStyles}
								placeholder="NAME"
								{...register("name", { required: true, maxLength: 100 })}
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === "required" && "This field is required."}
									{errors.name.type === "maxLength" &&
										"Max length is 100 characters."}
								</p>
							)}

							<input
								type="text"
								className={inputStyles}
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === "required" &&
										"This field is required."}
									{errors.email.type === "pattern" && "Invalid email address"}
								</p>
							)}

							<textarea
								rows={4}
								cols={50}
								className={inputStyles}
								placeholder="MESSAGE"
								{...register("message", { required: true, maxLength: 200 })}
							/>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === "required" &&
										"This field is required."}
									{errors.message.type === "maxLength" &&
										"Max length is 200 characters."}
								</p>
							)}

							<button
								type="submit"
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
							>
								SUBMIT
							</button>
						</form>
					</motion.div>
					{/* Image */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className="relative mt-16 basis-2/5 md:mt-0"
					>
						<div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
							<img
								src={ContactUsPageGraphic}
								alt="contact-us-page-graphic"
								className="w-full"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs;
