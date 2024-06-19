import { messageModel } from "../Models/messageModel.js";
export const Addmessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name) {
    return res.send(200).json({
      success: false,
      message: "Please provide Full name",
    });
  }
  if (!email) {
    return res.send(200).json({
      success: false,
      message: "Please provide Email",
    });
  }
  if (!message) {
    return res.send(200).json({
      success: false,
      message: "Please provide message",
    });
  }

  const newMessage = await messageModel.create({
    name,
    email,
    phone,
    message,
  });

  res.status(200).json({
    success: true,
    message: "message Saved Successfully",
    newMessage,
  });
};

export const getAllMessage =async (req, res)=>{
    const message = await messageModel.find();

    if(!message){
        return res.status(200).json({
            message:"not message avilable",
            success:"false"
        })
    }

    res.status(200).json({
        message,
        success:true
    })

}