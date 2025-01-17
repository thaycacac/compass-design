import {useDialog} from '@react-aria/dialog'
import {FocusScope} from '@react-aria/focus'
import {useModal, useOverlay, usePreventScroll} from '@react-aria/overlays'
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ModalActions from './modal-actions'
import ModalDescription from './modal-description'
import ModalTitle from './modal-title'
import ModalTrigger from './modal-trigger'
import {ModalVariantProps, StyledModal} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export type ModalProps = Props & ModalVariantProps

const Dialog = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    children,
    // ComponentProps
    onClose,
    // VariantProps
    size = 'md',
    // AriaButtonProps
    ...ariaSafeProps
  } = props

  const variantProps = {size} as ModalVariantProps
  const dialogRef = useDOMRef<HTMLDivElement>(ref)

  // Hanlde interacting outside of the dialog and pressing the Escape key to close the modal.
  const {overlayProps} = useOverlay(ariaSafeProps, dialogRef)

  // Prevent scrolling while the modal is open, and hide content outside the modal from screen readers.
  usePreventScroll()
  useModal()

  // Get props for its dialog and its title
  const {dialogProps} = useDialog(ariaSafeProps, dialogRef)

  // Pick title child component
  const {child: ModalTitleElement} = pickChild<typeof ModalTitle>(
    children,
    ModalTitle,
  )

  // Pick description child component
  const {child: ModalDescriptionElement} = pickChild<typeof ModalDescription>(
    children,
    ModalDescription,
  )

  // Pick action child component
  const {child: ModalActionsElement} = pickChild<typeof ModalActions>(
    children,
    ModalActions,
  )

  return (
    <FocusScope contain restoreFocus autoFocus>
      <StyledModal
        css={css}
        ref={dialogRef}
        {...variantProps}
        {...overlayProps}
        {...dialogProps}
      >
        {ModalTitleElement}
        {ModalDescriptionElement}
        {ModalActionsElement}
      </StyledModal>
    </FocusScope>
  )
})

export default Dialog as typeof Dialog & {
  Trigger: typeof ModalTrigger
  Title: typeof ModalTitle
  Description: typeof ModalDescription
  Actions: typeof ModalActions
}
