// pages/api/crypto-info.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { currency } = req.query;

	try {
		const response = await axios.get(
			`https://www.coinlore.com/cryptocurrency-data-api/ticker&ids=${currency}`
		);
		res.status(200).json(response.data[0]);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: "Unable to fetch crypto currency information" });
	}
};
