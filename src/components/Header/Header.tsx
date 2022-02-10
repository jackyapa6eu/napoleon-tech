import { MouseEvent } from 'react';
import { AccountCircleRounded, Add } from '@mui/icons-material';
import {
   AppBar,
   Toolbar,
   Button,
   Container,
   Link,
   Box
} from '@mui/material'

import { NavBarAvatarContainer } from '../../containers/NavBarAvatarContainer';

interface HeaderProps {
   isLoged: boolean;
   handleLogoClick: (e: MouseEvent) => void
}

export const Header = ({ isLoged, handleLogoClick }: HeaderProps) => {
   return (
      <AppBar position="static">
         <Container>
            <Toolbar disableGutters={true}>
               <Box sx={{ flexGrow: 1 }}>
                  <Link href="#" variant="h5" color="inherit" underline="none" onClick={handleLogoClick}>
                     Napoleon
                  </Link>
               </Box>
               {isLoged ? (
                  <>
                     <Button
                        color="inherit"
                        variant='text'
                        startIcon={
                           <Add />
                        }
                        size='medium'
                        sx={{ mx: 3 }}>
                        Добавить рецепт
                     </Button>
                     <NavBarAvatarContainer />
                  </>
               ) : (
                  <Button
                     color="inherit"
                     variant='outlined'
                     startIcon={
                        <AccountCircleRounded />
                     }
                     size='medium'
                     sx={{ ml: 2 }}>
                     Войти
                  </Button>
               )}
            </Toolbar>
         </Container>
      </AppBar>
   )
}