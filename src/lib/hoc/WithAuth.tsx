import { useRouter } from 'next/router';
import { useEffect } from 'react';

const WithAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter();
    const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('user');

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace('/login');
      }
    }, [router, isAuthenticated]);

    if (!isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
