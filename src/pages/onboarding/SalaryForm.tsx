import { Button } from "@/components/ui/button"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";

const SalaryForm = () => {
    const navigate = useNavigate()
    return (
        <main className="w-full min-h-screen bg-gray-950 flex flex-col justify-start items-center lg:py-24 lg:px-28 md:px-12 md:py-12 px-6 py-24 relative">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Salary Distribution Setup</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col gap-3 border border-gray-700 py-6 px-10 rounded-md mt-8">
                <HandleForm />
            </section>
            <Button onClick={() => navigate(-1)} className="bg-sky-400 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 md:left-8 left-6">
                <IoIosArrowRoundBack className="text-2xl" />
            </Button>
        </main>
    )
}

export default SalaryForm

type ValueTypes = {
    startDate: string
    endDate: string
    interval: string
    amount: number
    file: string
}

const HandleForm = () => {

    const [isSending, setIsSending] = useState(false);

    const initialValues: ValueTypes = { startDate: "", endDate: "", interval: "", amount: 0, file: "" };

    const validationSchema = Yup.object({
        startDate: Yup.date().required("Start date is required"),
        endDate: Yup.date(),
        interval: Yup.string().required("Interval is required"),
        amount: Yup.number().required("You need to fund your account"),
        file: Yup.string().required("Upload CSV file"),
    });

    const onSubmit = (values: ValueTypes, { resetForm }: FormikHelpers<ValueTypes>) => {
        setIsSending(true);
        const { startDate, endDate, interval, amount, file } = values;
        console.log({ startDate, endDate, interval, amount, file });

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
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"startDate"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">End Date (optional)</label>
                    <Field
                        type="date"
                        name={"endDate"}
                        id={"endDate"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"endDate"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">Set Interval</label>
                    <Field
                        as="select"
                        name={"interval"}
                        id={"interval"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
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
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <ErrorMessage name={"amount"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative w-full col-span-2 font-barlow">
                    <label className="text-gray-300 ml-1 mb-1">CSV Upload</label>
                    <Field
                        type="file"
                        name={"file"}
                        id={"file"}
                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                    />
                    <small className="ml-1 block text-sm text-gray-400">Upload csv file containing the employee data-(amount, address etc)</small>
                    <ErrorMessage name={"file"} component="div" className="text-red-500 text-sm" />
                </div>

                <div className="col-span-2">
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