import { decode } from 'ripple-binary-codec'

exports.decodeTx = tx => {
  return decode(tx)
}
