const mongoose = require('mongoose/browser');
const { DiscriminatorTypeSchema } = require('./DiscriminatorType');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionSlicingDiscriminatorSchema = ElementSchemaFunction({
   type : DiscriminatorTypeSchema,
   path : String,
   fhirTitle: { type: String, default: 'ElementDefinitionSlicingDiscriminator' },
});

class ElementDefinitionSlicingDiscriminator extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionSlicingDiscriminatorSchema);
    this._type = 'FHIR::ElementDefinitionSlicingDiscriminator';
  }
};


module.exports.ElementDefinitionSlicingDiscriminatorSchema = ElementDefinitionSlicingDiscriminatorSchema;
module.exports.ElementDefinitionSlicingDiscriminator = ElementDefinitionSlicingDiscriminator;
