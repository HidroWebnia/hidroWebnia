import React, { useState } from 'react';
import styled from 'styled-components';
import { useApi } from '../hooks/useApi';
import { Table, Button } from 'react-bootstrap';
import moment from 'moment';
import ModalDelete from './ModalDelete';
import FormEdit from './FormEdit';
import { deleteRegister, editRegister } from '../services/api';
import { jwtDecode } from 'jwt-decode';
import Userfront from '@userfront/toolkit';

const Photo = styled.div`
  img {
    height: 100px;
    width: 100px;
  }
`;

const AdminDetails = () => {
  const userData = jwtDecode(Userfront.idToken());
  const email1 = userData.email;
  const { data } = useApi(`/devices/${email1}`);

  const del = (id) => {
    deleteRegister(id);
  };

  const ed = (id, data) => {
    editRegDevice(id, data);
  };

  const [choice] = useState({
    delete: {
      header: 'Confirmar Exclusão?',
      variant: 'danger',
      label: 'OK',
      showBody: true,
      body: 'Tem Certeza que Deseja Deletar?',
      callback: del,
    },
    edit: {
      header: 'Editar Device',
      variant: 'primary',
      label: 'Salvar',
      showBody: false,
      callback: ed,
    },
  });
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [show, setshow] = useState(false);

  const [escCurrent, setEscCurrent] = useState({
    header: '',
    variant: '',
    label: '',
    body: '',
    id: '',
    email: '',
  });

  const manipulateShow = (device, esc) => {
    setEscCurrent(esc);
    setshow(true);
    setId(device._id);
    setEmail(device.email);
    setName(device.name);
    setDescription(device.description);
    setImage(device.image);
  };

  const editRegDevice = (id, data) => {
    const newRegDevice = {
      name: data.name,
      description: data.description,
      image: data.image,
    };
    editRegister(id, newRegDevice);
  };

  return (
    <div>
      <div class="table-responsive">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Device ID</th>
              <th>Nome</th>
              <th>Data de Cadastro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item) => (
              <tr key={item._id}>
                <td>
                  <Photo>
                    <img src={item.image} alt="imagem" />
                  </Photo>
                </td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{moment(item.date).format('DD-MM-YYYY')}</td>
                <td>
                  <div class="d-grid gap-y-1 col-6 mx-auto">
                    <Button
                      variant="info"
                      onClick={() => manipulateShow(item, choice.edit)}
                    >
                      Editar
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      variant="danger"
                      onClick={() => manipulateShow(item, choice.delete)}
                    >
                      Deletar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ModalDelete
          show={show}
          setshow={setshow}
          escCurrent={escCurrent}
          id={id}
          email={email}
        >
          {escCurrent.showBody && escCurrent.body}
          {!escCurrent.showBody && (
            <FormEdit
              name={name}
              setName={setName}
              id={id}
              setId={setId}
              description={description}
              setDescription={setDescription}
              email={email}
              setEmail={setEmail}
              image={image}
              setImage={setImage}
            />
          )}
        </ModalDelete>
      </div>
    </div>
  );
};

export default AdminDetails;
