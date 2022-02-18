import { Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectRecipeById } from '../../../store/slices/recipes/recipesSelectors'
import { MatchParams } from '../../../types/globalTypes'

export const FullRecipeInstruction = () => {
    const routeParams = useParams<MatchParams>()
    const recipe = useSelector(selectRecipeById(routeParams.id))

    return (
        <Container>
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <Typography
                        component='h2'
                        variant='h5'
                        align='center'
                        sx={{
                            pb: 3,
                        }}
                    >
                        Инструкция приготовления
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='justify'>
                        {recipe?.recipeText}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}