import { writeFile } from 'fs'
import { promisify } from 'util'
import { isObject } from '../../utils/is-object/is-object.utils'

export class FileService {
  static create (filename: string, content: any) {
    if (!filename) {
      // Avoid creating files for empty paths
      return
    }

    if (isObject(content)) {
      content = JSON.stringify(content, null, 2)
    }

    return promisify(writeFile)(filename, content)
  }
}
