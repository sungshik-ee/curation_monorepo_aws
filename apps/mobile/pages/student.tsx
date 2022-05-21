import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useMutation, useQueryClient } from 'react-query';

import { useAxios } from '@DanbiEduCorp/core/src/axios';

import { TodayStudyCard10 } from '@DanbiEduCorp/ui/stories/cards/study/TodayStudyCard10';
import { TodayStudyCard20 } from '@DanbiEduCorp/ui/stories/cards/study/TodayStudyCard20';

const Student: NextPage = () => {
    return (
        <div>
            <div>
                <TodayStudyCard10 />
            </div>

        </div>
    )
}

export default Student;