const WithName = (OldComponent) => {
  return function EnhancedComponent(props) {
    return <OldComponent {...props} name="withName" />;
  };
};

export default WithName;
