function Avatar2(props) {
  return (
    <div className="flex ml-12">
      <img src={this.state.dataTwo.avatar_url} />
      <p className="mx-5">{this.state.dataTwo.login}</p>
      <button onClick={this.handleCancel2} className="text-red-600">
        X
      </button>
    </div>
  );
}

export default Avatar2;
