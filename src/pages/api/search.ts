import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/script/prisma";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  // if (req.method === "POST") {
  //   handlePostMethod(req, res);
  // }

  // if (req.method === "DELETE") {
  //   handleDeleteMethod(req, res);
  // }

  // if (req.method === "PUT") {
  //   handlePutMethod(req, res);
  // }
}





 async function handleGetMethod(req : NextApiRequest, res : NextApiResponse) {
  if (req.method === 'GET') {
    const pinData = await prisma.telusuriPin.findMany();
    res.status(200).json(pinData)
  
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}