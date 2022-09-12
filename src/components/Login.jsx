import { Button, Box, TextField, Typography } from "@mui/material";
import { login } from "../store/auth/authThunk";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('email is required'),
    password: yup
        .string('Enter your password')
        .required('password is required'),
});

export default function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            dispatch(login(values.email, values.password));
        },
    });

    return (
        <Box sx = {{ backgroundColor: "white", height: "fit-content", p: 5, borderRadius: "10px", mr: 15, width: "420px" }}>
            <Typography variant="h6" gutterBottom>
                Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    id="password"
                    name="password"
                    label="Contraseña"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    sx={{ mt: 4 }}
                    color="primary" variant="contained" fullWidth type="submit">
                    Login
                </Button>
            </form>
        </Box>
    );
}