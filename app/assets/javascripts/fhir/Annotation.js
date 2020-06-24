const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ElementSchema } = require('./Element');
const { ReferenceSchema } = require('./Reference');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AnnotationSchema = ElementSchemaFunction({
   authorReference : ReferenceSchema,
   authorString : String,
   time : DateTime,
   text : String,
   fhirTitle: { type: String, default: 'Annotation' },
});

class Annotation extends mongoose.Document {
  constructor(object) {
    super(object, AnnotationSchema);
    this._type = 'FHIR::Annotation';
  }
};


module.exports.AnnotationSchema = AnnotationSchema;
module.exports.Annotation = Annotation;
