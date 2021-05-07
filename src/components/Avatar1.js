function Avatar1(props) {
  return (
    <div className="flex mr-8">
      <img className="w-20" src={this.state.dataOne.avatar_url} />
      <p className="mx-5">{this.state.dataOne.login}</p>
      <button onClick={this.handleCancel} className="text-red-600">
        X
      </button>
    </div>
  );
}

export default Avatar1;
