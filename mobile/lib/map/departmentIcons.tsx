import React from 'react'

import EvilIcons from '@expo/vector-icons/EvilIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ICON_SIZE = 28

export const departmentIcons = {
    "English":<FontAwesome name="book" size={ICON_SIZE} />,
    "Science":<MaterialIcons name="science" size={ICON_SIZE} />,
    "CTE":<EvilIcons size={ICON_SIZE} name="gear" />,
    "Math":<MaterialCommunityIcons name="math-compass" size={ICON_SIZE}/>,
    "Social Studies":<MaterialCommunityIcons name="globe-model" size={ICON_SIZE} />,
    "Arts":<FontAwesome name="paint-brush" size={ICON_SIZE} />,
    "PE":<MaterialIcons name="sports-football" size={ICON_SIZE} />,
    "World Language":<FontAwesome name="language" size={ICON_SIZE} />,
    }

