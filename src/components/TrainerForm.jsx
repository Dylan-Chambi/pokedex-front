import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import api from '../config/api';

const validationSchema = yup.object({
    nombre: yup
        .string('Enter your name')
        .required('name is required'),
    codigo: yup
        .string('Enter your code')
        .required('Code is required'),
    id_pokemon: yup
        .string('Enter a pokemon ID')
        .required('Pokemon ID is required')
});

const TrainerForm = () => {
    const formik = useFormik({
        initialValues: {
            nombre: "",
            codigo: "",
            id_pokemon: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            api.post('/trainer', {
                nombre: values.nombre,
                codigo: values.codigo,
                id_pokemon: values.id_pokemon
            }).then((response) => {
                alert(response.data.message)
            }).catch((err)=> {
                console.log(err);
            })
        },
    });

    return (
        <Box sx={{ width: "400px" }}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ mt: 2}}
                    fullWidth
                    id="nombre"
                    name="nombre"
                    label="Nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                    helperText={formik.touched.nombre && formik.errors.nombre}
                />
                <TextField
                    sx={{ mt: 2}}
                    fullWidth
                    id="codigo"
                    name="codigo"
                    label="Codigo"
                    value={formik.values.codigo}
                    onChange={formik.handleChange}
                    error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                    helperText={formik.touched.codigo && formik.errors.codigo}
                />
                <TextField
                    sx={{ mt: 2}}
                    fullWidth
                    id="id_pokemon"
                    name="id_pokemon"
                    label="Pokemon ID"
                    value={formik.values.id_pokemon}
                    onChange={formik.handleChange}
                    error={formik.touched.id_pokemon && Boolean(formik.errors.id_pokemon)}
                    helperText={formik.touched.id_pokemon && formik.errors.id_pokemon}
                />
                <Button id={'btn-logging'} sx={{ mt: 4}} color="primary" variant="contained" fullWidth type="submit">
                    Crear
                </Button>
            </form>
        </Box>
    );
};

export default TrainerForm;