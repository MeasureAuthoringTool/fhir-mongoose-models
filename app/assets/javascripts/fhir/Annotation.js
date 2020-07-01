const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AnnotationSchema = ElementSchemaFunction({
  authorReference: ReferenceSchema,
  authorString: PrimitiveStringSchema,
  time: PrimitiveDateTimeSchema,
  text: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'Annotation' },
  _type: { type: String, default: 'FHIR::Annotation' },
});

class Annotation extends mongoose.Document {
  constructor(object) {
    super(object, AnnotationSchema);
    this.typeName = 'Annotation';
    this._type = 'FHIR::Annotation';
  }
}

module.exports.AnnotationSchema = AnnotationSchema;
module.exports.Annotation = Annotation;
