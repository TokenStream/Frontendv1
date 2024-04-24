import { useState } from "react";
import coverImg from "../../assets/authImage.webp";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { BsExclamation } from "react-icons/bs";
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";


const Signup = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full h-screen flex bg-gray-950">
            <main className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2">
                <aside className="lg:col-span-2 hidden overflow-hidden rounded-e-3xl md:flex w-full h-full">
                    <img src={coverImg} alt="image" className="w-full h-full object-cover" />
                </aside>
                <aside className="flex flex-col items-center relative px-10 justify-center">
                    <SignupForm />

                    <Button onClick={() => navigate('/')} className="bg-sky-400 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 left-8">
                        <IoIosArrowRoundBack className="text-2xl" />
                    </Button>
                </aside>
            </main>
        </section>
    )
}

export default Signup


type ValueTypes = {
    name: string
}

export const SignupForm = () => {
    const [isSending, setIsSending] = useState(false);

    const initialValues: ValueTypes = { name: "" };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
    });

    const onSubmit = (values: ValueTypes, { resetForm }: FormikHelpers<ValueTypes>) => {
        setIsSending(true);
        const { name } = values;
        console.log(name);

        setIsSending(false);
        resetForm({ values: initialValues });
        // toast.success("Message Sent Successfully", { position: "top-right" });
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="w-full flex flex-col gap-3 border border-gray-700 pt-24 pb-12 px-6 rounded-md relative">
                <div className="w-full flex flex-col mb-2">
                    <h1 className="text-4xl text-gray-200 font-belanosima">Signup</h1>
                    <p className="text-gray-400 font-barlow">Enter your name to get started</p>
                </div>


                <div className="absolute -top-12 left-8 w-28 h-28 overflow-hidden rounded-full border-2 border-gray-700">
                    <img src={`https://github.com/shadcn.png`} alt="avatar" className="w-full h-full object-cover" />
                </div>

                <div className="relative w-full font-barlow">
                    <Field
                        type={"text"}
                        id={"name"}
                        className={`block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-10`}
                        name='name'
                        placeholder={`Enter your name`}
                    />
                    <ErrorMessage name={'name'}>{(errorMsg) => <div className="pt-0 ml-2 text-red-500 text-xs font-barlow font-light flex items-center">{errorMsg}<BsExclamation /></div>}</ErrorMessage>
                </div>

                <Button
                    type="submit"
                    className={`text-gray-100 text-sm mt-4 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                >
                    {
                        isSending ? <span className="flex items-center">
                            <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                            Submitting...</span> :
                            <span className="flex items-center">Submit
                                <PiSignInFill className="text-xl ml-1" />
                            </span>
                    }

                </Button>
            </Form>
        </Formik>
    )
}