import { ComponentType, Suspense, SuspenseProps } from 'react';
import Loader from '../Loader/Loader';

export default function withSuspense<P extends object>(
  WrappedComponent: ComponentType<P>,
  fallback: SuspenseProps['fallback'] = <Loader />,
) {
  return function ComponentWithSuspense(props: P) {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
