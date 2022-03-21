import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const _open = () => setOpen(true);
  const _close = () => setOpen(false);
  return (
    <div className="basic-modal">
      <Button onClick={_open}>Open modal 1</Button>
      <Modal
        open={open}
        onClose={_close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Modal 1
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is a basic modal.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function ChildModal() {
  const [open3, setOpen3] = React.useState(false);
  const _openChild = () => {
    setOpen3(true);
  };
  const _closeChild = () => {
    setOpen3(false);
  };

  return (
    <React.Fragment>
      <Button onClick={_openChild}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open3}
        onClose={_closeChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style2, width: 200 }}>
          <h2 id="child-modal-title">Child modal</h2>
          <p id="child-modal-description">
            This is a child modal of the nested modal.
          </p>
          <Button onClick={_closeChild}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function NestedModal() {
  const [open2, setOpen2] = React.useState(false);
  const _openParent = () => {
    setOpen2(true);
  };
  const _closeParent = () => {
    setOpen2(false);
  };

  return (
    <div className="nested-modal">
      <Button onClick={_openParent}>Open modal 2</Button>
      <Modal
        open={open2}
        onClose={_closeParent}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style2, width: 400 }}>
          <h2 id="parent-modal-title">Modal 2</h2>
          <p id="parent-modal-description">This is a nested modal.</p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

function Modals() {
  return (
    <div className="modals">
      <h2>Modals</h2>
      <h3>Basic Modal</h3>
      <BasicModal />
      <h3>Nested Modal</h3>
      <NestedModal />
    </div>
  );
}

export default Modals;
