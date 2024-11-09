import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WithAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('uid');
      if (!isAuthenticated) router.replace('/login');

      setIsLoading(false);
    }, [router]);

    if (isLoading) return null;

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
