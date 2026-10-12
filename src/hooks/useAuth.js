import { useState } from 'react';

export const useAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const openAuth = () => setIsOpen(true);
  const closeAuth = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return {
    isOpen,
    role,
    setRole,
    email,
    setEmail,
    password,
    setPassword,
    isSuccess,
    openAuth,
    closeAuth,
    handleSubmit
  };
};
