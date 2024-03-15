'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

const Page: FC = () => {
	const router = useRouter();
	console.log(router);
	return <p>Post:</p>;
};

export default Page;
