import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@DanbiEduCorp/core/src/axios';

import { MainLayout } from '@DanbiEduCorp/ui/stories/cards/MainLayout';

const Student: NextPage = () => {
    const handleClick = () => {
        console.log('clicked!!');
    };
    return (
        <div>
            <div>
                <MainLayout />
            </div>
        </div>
    );
};

export default Student;
