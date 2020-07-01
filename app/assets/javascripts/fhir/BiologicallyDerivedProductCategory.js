const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const BiologicallyDerivedProductCategorySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'BiologicallyDerivedProductCategory' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductCategory' },
});

class BiologicallyDerivedProductCategory extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductCategorySchema);
    this.typeName = 'BiologicallyDerivedProductCategory';
    this._type = 'FHIR::BiologicallyDerivedProductCategory';
  }
}

module.exports.BiologicallyDerivedProductCategorySchema = BiologicallyDerivedProductCategorySchema;
module.exports.BiologicallyDerivedProductCategory = BiologicallyDerivedProductCategory;
