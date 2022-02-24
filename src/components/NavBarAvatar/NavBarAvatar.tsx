import { MouseEvent } from 'react';
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Badge,
} from '@mui/material';
import { PopoverProps } from '@mui/material/Popover';

interface NavBarAvatarProps {
  menuIsOpen: boolean;
  menuAnchorEl: null | PopoverProps['anchorEl'];
  handleLogoutBtnClick: () => void;
  handleOpenMenu: (e: MouseEvent) => void;
  handleCloseMenu: () => void;
  avatar: string | undefined;
  handleMyRecipesButton: () => void;
}

export const NavBarAvatar = ({
  menuIsOpen,
  menuAnchorEl,
  handleLogoutBtnClick,
  handleOpenMenu,
  handleCloseMenu,
  avatar,
  handleMyRecipesButton,
}: NavBarAvatarProps) => {
  return (
    <Box>
      <Tooltip title="Открыть меню пользователя">
        <Badge>
          <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
            <Avatar alt="Avatar" src={avatar} />
          </IconButton>
        </Badge>
      </Tooltip>
      <Menu
        open={menuIsOpen}
        anchorEl={menuAnchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 1 }}
      >
        <MenuItem>
          <Typography
            variant="body1"
            textAlign="center"
            onClick={handleMyRecipesButton}
          >
            Мои рецепты
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Typography
            variant="body1"
            textAlign="center"
            onClick={handleLogoutBtnClick}
          >
            Выйти
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
