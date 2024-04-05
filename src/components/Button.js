function Button({ children, onclick, disable, type }) {
  return (
    <div>
      <button
        className="init-btn-wrapper"
        onClick={onclick}
        disabled={disable}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
