import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledWizard = styled('div', {
  width: '100%',
  position: 'relative',
  '& .wizard-progress-wrapper': {
    width: '100%',
    display: 'flex',
    '& .item-wrapper': {
      width: 'calc(100% / $$itemsLength)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  '& .wizard-content-wrapper': {
    marginTop: '$2',
    width: '100%',
    display: 'flex',
  },
})

export const StyledLine = styled('div', {
  flexGrow: 1,
  height: '$0_5',
  backgroundColor: '$cdgBlue100',
  zIndex: 0,
  variants: {
    side: {
      left: {},
      right: {},
    },
    bordered: {
      true: {},
      false: {},
    },
    active: {
      true: {
        backgroundColor: '$cdgBlue100',
      },
      false: {
        backgroundColor: '$cdgBlue10',
      },
    },
  },
  compoundVariants: [
    {
      side: 'left',
      bordered: true,
      css: {
        borderTopLeftRadius: '$full',
        borderBottomLeftRadius: '$full',
      },
    },
    {
      side: 'right',
      bordered: true,
      css: {
        borderTopRightRadius: '$full',
        borderBottomRightRadius: '$full',
      },
    },
  ],
})

export const StyledItem = styled('span', {
  position: 'relative',
  width: '$5',
  height: '$5',
  borderRadius: '$full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$whiteText',
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$tight',
  userSelect: 'none',
  zIndex: 2,

  variants: {
    active: {
      true: {
        backgroundColor: '$cdgBlue100',
        '&:hover': {
          '&:after': {
            width: '$7',
            height: '$7',
          },
        },
        '&:after': {
          position: 'absolute',
          content: '',
          width: '$6',
          height: '$6',
          borderRadius: '$full',
          backgroundColor: '$cdgBlue100',
          opacity: '0.2',
          zIndex: 1,
        },
      },
      false: {
        backgroundColor: '$cdgBlue10',
      },
    },
  },
})

export const StyledContent = styled('div', {
  width: 'calc(100% / $$itemsLength)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$tight',
  userSelect: 'none',
  variants: {
    active: {
      true: {
        color: '$gray100',
      },
      false: {
        color: '$gray70',
      },
    },
  },
})

export type WizardVariantProps = VariantProps<typeof StyledWizard>
