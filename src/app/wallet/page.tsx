"use client";
const walletPage = () => {
  const SubmitBalance = () => {
    console.log("submit balance");
  };
  return (
    <div className="flex gap-6 py-6">
      <div className="flex flex-col  p-6 mx-auto w-8/12 bg-white rounded-lg">
        <h1 className="text-2xl font-bold leading-20">wallet 转账</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col text-sm gap-2">
            <label className="text-gray-500">我的钱包地址：</label>
            <input
              type="text"
              placeholder="请输入钱包地址"
              disabled
              className="border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="text-gray-500">转入地址：</label>
            <input
              type="text"
              placeholder="请输入钱包地址"
              className="border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="text-gray-500">转账金额:</label>
            <input
              type="text"
              placeholder="请输入转账金额"
              className="border  border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 w-24"
            onClick={SubmitBalance}
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
};

export default walletPage;
