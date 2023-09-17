export default {
   name: 'user',
   title: 'User',
   type: 'document',
   fields: [
      {
         name: 'fullName',
         title: 'Full Name',
         type: 'string',
      },
      {
         name: 'userName',
         title: 'User Name',
         type: 'string',
      },
      {
         name: 'email',
         title: 'Email',
         type: 'string',
      },
      {
         name: 'password',
         title: 'Password',
         type: 'string',
      },
      {
         name: 'role',
         title: 'Role',
         type: 'string',
      },
      {
         name: 'image',
         title: 'Image',
         type: 'image',
         Options: {
            hotspot: true,
         }
      },
      
   ]
}