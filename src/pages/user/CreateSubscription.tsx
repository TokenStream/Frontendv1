import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import dstv from "../../assets/DStv.jpeg";
import netflix from "../../assets/netflix.webp"

const CreateSubscription = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Subscription Setup</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col my-4 gap-3">
                <h3 className="md:text-xl text-lg text-gray-300 font-belanosima">Available Subscription Services</h3>
                <main className="w-full grid grid-cols-2 gap-8">
                    <div className="w-full h-[200px] bg-gray-800 p-4 rounded-md">
                        <img src={dstv} alt="DStv" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[200px] bg-gray-800 p-4 rounded-md">
                        <img src={netflix} alt="netflix" className="w-full h-full object-cover" />
                    </div>
                </main>
            </section>
            <section className="w-full flex flex-col gap-3 border  border-gray-600 bg-gray-800 py-6 px-10 rounded-md mt-8">
                <HandleForm />
            </section>
        </main>
    )
}

export default CreateSubscription


type ValueTypes = {
    startDate: string
    endDate: string
    interval: string
    amount: number
    choice: string
}

const HandleForm = () => {

    const [isSending, setIsSending] = useState(false);

    const initialValues: ValueTypes = { startDate: "", endDate: "", interval: "", amount: 0, choice: "" };

    const validationSchema = Yup.object({
        startDate: Yup.date().required("Start date is required"),
        endDate: Yup.date(),
        interval: Yup.string().required("Interval is required"),
        amount: Yup.number().required("You need to fund your account"),
        choice: Yup.string().required("Choose an option"),
    });

    const onSubmit = (values: ValueTypes, { resetForm }: FormikHelpers<ValueTypes>) => {
        setIsSending(true);
        const { startDate, endDate, interval, amount, choice } = values;
        console.log({ startDate, endDate, interval, amount, choice });

        setIsSending(false);
        resetForm({ values: initialValues });
        // toast.success("Message Sent Successfully", { position: "top-right" });
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="w-full grid grid-cols-2 gap-8">
                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">Start Date</label>
                    <Field
                        type="date"
                        name={"startDate"}
                        id={"startDate"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"startDate"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">End Date (optional)</label>
                    <Field
                        type="date"
                        name={"endDate"}
                        id={"endDate"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"endDate"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">Set Interval</label>
                    <Field
                        as="select"
                        name={"interval"}
                        id={"interval"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    >
                        <option value="">Select Interval</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </Field>
                    <ErrorMessage name={"interval"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">Amount</label>
                    <Field
                        type="number"
                        name={"amount"}
                        id={"amount"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"amount"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full col-span-2 font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">Choose a subscription service</label>
                    <Field
                        as="select"
                        name={"choice"}
                        id={"choice"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    >
                        <option value="">Select </option>
                        <option value="dstv">DSTV</option>
                        <option value="netflix">Netflix</option>
                    </Field>

                    <ErrorMessage name={"choice"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="md:col-span-2">
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
                </div>
            </Form>
        </Formik>
    )
}