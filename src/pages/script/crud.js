const dialog = document.querySelector('.add-user');
const modalEditUser = document.querySelector('.edit-user');
const showButton = document.getElementById('add-user');
const closeButton = document.querySelector('dialog button');
const $closeBtnEdit = document.querySelector('.modal__close--edit');

const $formAddUser = document.querySelector('.add-user__form');
const $formEditUser = document.querySelector('.edit-user__form');
const $tableUsers = document.querySelector('.table__body');
const $btnDeleteUser = document.querySelector('.table__action--delete');

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
 dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
 dialog.close();
});
$closeBtnEdit.addEventListener('click', () => {
 modalEditUser.close();
});

const userDate = [
 {
  id: 1,
  userName: 'Leonardo Rincón',
  email: 'Example@example.com',
  rol: 'Administrador',
  permissions: 'Lector',
 },
];

let Id = 2;

const addUser = (e) => {
 e.preventDefault();
 const newUser = Object.fromEntries(new FormData(e.target));
 if (!newUser.id) newUser.id = Id++;
 userDate.push(newUser);
 printDataUser(userDate);
 dialog.close();
 $formAddUser.reset();
};
const deleteUser = (id) => {
 const userIndex = userDate.findIndex((user) => user.id === id);
 if (userIndex !== -1) {
  userDate.splice(userIndex, 1);
  printDataUser(userDate);
 }
};

const editUser = (id) => {
 const userToEdit = userDate.find((user) => user.id === id);
 $formEditUser.querySelector('input[name="userName"]').value =
  userToEdit.userName;
 $formEditUser.querySelector('input[name="email"]').value = userToEdit.email;
 $formEditUser.querySelector('select[name="rol"]').value = userToEdit.rol;
 $formEditUser.querySelector('select[name="permissions"]').value =
  userToEdit.permissions;

 modalEditUser.showModal();

 $formEditUser.onsubmit = (e) => {
  e.preventDefault();

  userToEdit.userName = $formEditUser.querySelector(
   'input[name="userName"]'
  ).value;
  userToEdit.email = $formEditUser.querySelector('input[name="email"]').value;
  userToEdit.rol = $formEditUser.querySelector('select[name="rol"]').value;
  userToEdit.permissions = $formEditUser.querySelector(
   'select[name="permissions"]'
  ).value;

  printDataUser(userDate);

  modalEditUser.close();
  $formEditUser.reset();
 };
};

const printDataUser = (users) => {
 $tableUsers.innerHTML = '';

 users.forEach((user) => {
  const userRow = document.createElement('tr');
  userRow.className = `user__row--${user.id}`;
  userRow.innerHTML = `
      <td>${user.id}</td>
      <td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${user.rol}</td>
      <td>
        <span>${user.permissions}</span>
      </td>
      <td class="table__body--action">
        <div class="table__action--edit" id="${`user__edit--${user.id}`}" title="Haz clic aquí para editar el usuario"></div>
        <div class="table__action--delete" id="${`user__delete--${user.id}`}" title="Haz clic aquí para eliminar el usuario"></div>
      </td>
    `;

  $tableUsers.appendChild(userRow);
 });
 document.querySelectorAll('.table__action--delete').forEach((btn) => {
  btn.addEventListener('click', (e) => {
   const id = e.target.getAttribute('id');
   const userId = id.split('--')[1];
   deleteUser(parseInt(userId, 10));
  });
 });

 document.querySelectorAll('.table__action--edit').forEach((btn) => {
  btn.addEventListener('click', (e) => {
   const id = e.target.getAttribute('id');
   const userId = id.split('--')[1];
   editUser(parseInt(userId, 10));
  });
 });
};

$formAddUser.addEventListener('submit', addUser);
$formEditUser.addEventListener('submit', editUser);

printDataUser(userDate);
